import { Button } from '@mui/material';
import { TextManrope } from '../TextManrope';
import { Icon } from '../Icon';
import { GridBox } from '../GridBox';
import { useCSSMedia } from '@/utils';
import { ReactNode } from 'react';

export const MessageBox = ({
  title,
  telegramUrl,
  instagramUrl,
}: {
  title: ReactNode;
  telegramUrl: string;
  instagramUrl: string;
}) => {
  const isMobile = useCSSMedia();

  return (
    <GridBox
      bgcolor='#221121'
      height={'146px'}
      padding='6px 4px'
      alignItems={'center'}
      justifyContent={'center'}
    >
      <GridBox
        maxWidth={'1400px'}
        paddingX={'20px'}
        gridTemplateColumns={isMobile ? '1fr' : '2fr 1fr'}
      >
        <TextManrope
          sx={{
            textWrap: 'balance',
            fontWeight: 100,
            fontSize: 18,
          }}
          color='#d9d6d6'
        >
          {title}
        </TextManrope>

        <GridBox
          gridTemplateColumns={'1fr 1fr'}
          gap={isMobile ? '1rem' : '3rem'}
        >
          <GridBox>
            <Button
              color='inherit'
              target='_blank'
              href={telegramUrl}
              sx={{
                background: 'linear-gradient(120deg, #948C9B, #BEA7AB)',
                height: 60,
                width: 238,
                color: 'white',
                gap: '20px',
                borderRadius: 0,
              }}
            >
              <TextManrope>Написать</TextManrope>
              <Icon icon='telegram' />
            </Button>
          </GridBox>
          <GridBox>
            <Button
              color='inherit'
              target='_blank'
              href={instagramUrl}
              sx={{
                background: 'linear-gradient(120deg, #948C9B, #BEA7AB)',
                height: 60,
                width: 238,
                color: 'white',
                gap: '20px',
                borderRadius: 0,
              }}
            >
              <TextManrope>Написать</TextManrope>
              <Icon icon='instagram' />
            </Button>
          </GridBox>
        </GridBox>
      </GridBox>
    </GridBox>
  );
};
