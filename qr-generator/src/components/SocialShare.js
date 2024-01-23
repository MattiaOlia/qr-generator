import React from 'react';
import { Box, Button } from '@mui/material';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
} from 'react-share';

export default function SocialShare({ url }) {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
      <FacebookShareButton url={url}>
        <Button variant="outlined">
          <FacebookIcon size={32} round />
        </Button>
      </FacebookShareButton>
      <TwitterShareButton url={url}>
        <Button variant="outlined">
          <TwitterIcon size={32} round />
        </Button>
      </TwitterShareButton>
      <LinkedinShareButton url={url}>
        <Button variant="outlined">
          <LinkedinIcon size={32} round />
        </Button>
      </LinkedinShareButton>
      <WhatsappShareButton url={url}>
        <Button variant="outlined">
          <WhatsappIcon size={32} round />
        </Button>
      </WhatsappShareButton>
    </Box>
  );
}