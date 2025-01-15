export const generateImage = async (req, res) => {
    try {
      const { prompt } = req.body;
  
      if (!prompt) {
        return res.json({ success: false, message: 'Missing Details: prompt' });
      }
  
      const userId = req.user.id; // Get userId from middleware
      const user = await userModel.findById(userId);
  
      if (!user) {
        return res.json({ success: false, message: 'User not found' });
      }
  
      if (user.creditBalance === 0) {
        return res.json({
          success: false,
          message: 'No Credit Balance',
          creditBalance: user.creditBalance,
        });
      }
  
      const formData = new FormData();
      formData.append('prompt', prompt);
  
      const { data } = await axios.post('https://clipdrop-api.co/text-to-image/v1', formData, {
        headers: {
          'x-api-key': process.env.CLIPDROP_API,
        },
        responseType: 'arraybuffer',
      });
  
      const base64Image = Buffer.from(data, 'binary').toString('base64');
      const resultImage = `data:image/png;base64,${base64Image}`;
  
      await userModel.findByIdAndUpdate(user._id, {
        creditBalance: user.creditBalance - 1,
      });
  
      res.json({
        success: true,
        message: 'Image Generated',
        creditBalance: user.creditBalance - 1,
        resultImage,
      });
    } catch (error) {
      console.error("Error:", error.message);
      res.json({ success: false, message: error.message });
    }
  };
  