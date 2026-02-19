import { AspectRatio, Box } from '@chakra-ui/react';

import { TestData } from './test.types';

interface VideoTestViewProps {
    test: TestData;
}

export const VideoTestView = ({ test }: VideoTestViewProps) => {
    if (!test.videoUrl) {
        return <Box p={4}>Видео не найдено</Box>;
    }

    // Определяем, YouTube это или локальный файл
    const isYouTube =
        test.videoUrl.includes('youtube.com/embed') || test.videoUrl.includes('youtu.be');

    return (
        <Box width='100%' overflow='hidden'>
            <AspectRatio ratio={4 / 3} maxH='calc(90vh - 200px)'>
                {isYouTube ? (
                    <iframe
                        src={test.videoUrl}
                        title={test.title}
                        allowFullScreen
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        style={{ border: 'none', objectFit: 'contain' }}
                    />
                ) : (
                    <Box
                        as='video'
                        src={test.videoUrl}
                        controls
                        width='100%'
                        height='100%'
                        sx={{ objectFit: 'contain !important' }}
                        bg='black'
                    >
                        <track kind='captions' />
                    </Box>
                )}
            </AspectRatio>
        </Box>
    );
};
