import { Box } from '@mui/material'
import { ComponentProps } from 'react'

type FlexBoxProps = ComponentProps<typeof Box>

export const FlexBox = (props: FlexBoxProps) => <Box display='flex' {...props} />