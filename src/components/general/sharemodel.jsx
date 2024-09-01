import React, { useState } from "react";
import { Box, Button, Typography, Modal, IconButton } from "@mui/material";
import { Facebook, Instagram, LinkedIn} from "@mui/icons-material";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import XIcon from '@mui/icons-material/X';

const ShareModal = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button size="small" onClick={handleOpen}>
        Share
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="share-modal-title"
        aria-describedby="share-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: { xs: 300, sm: 400 },
            bgcolor: 'black',
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <Typography id="share-modal-title" variant="h6" component="h2">
            Share This Page
          </Typography>
          <Typography id="share-modal-description" sx={{ mt: 2 }}>
            Choose a platform to share:
          </Typography>
          <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-around' }}>
           
            <IconButton href="https://api.whatsapp.com/send?text=yourTextHere" sx={{ color: "#25D366" }}>
              <WhatsAppIcon />
            </IconButton>
            <IconButton href="https://x.com/share?text=yourTextHere" sx={{ color: "#1DA1F2" }}>
              <XIcon />
            </IconButton>
            <IconButton href="https://www.facebook.com/sharer/sharer.php?u=yourURL" sx={{ color: "#4267B2" }}>
              <Facebook />
            </IconButton>
            <IconButton href="https://www.linkedin.com/shareArticle?mini=true&url=yourURL" sx={{ color: "#0A66C2" }}>
              <LinkedIn />
            </IconButton>
             <IconButton href="https://www.instagram.com/" sx={{ color: "#E1306C" }}>
              <Instagram />
            </IconButton>
          </Box>
         
        </Box>
      </Modal>
    </div>
  );
};

export default ShareModal;
