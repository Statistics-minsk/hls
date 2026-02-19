export interface TestAnswer {
    id: number;
    title: string;
    value: number;
    imageSrc?: string;
    resultText?: string;
}

export interface TestQuestion {
    id: number;
    question: string;
    answers: TestAnswer[];
}

export interface TestResult {
    id: number;
    min: number;
    max: number;
    title: string;
    desc: string;
    imageSrc?: string;
}

export interface ProjectiveImage {
    id: number;
    src: string;
    desc: string;
}

export interface ProjectiveOption {
    id: number;
    title: string;
    desc: string;
}

export interface TestData {
    id: number;
    title: string;
    desc: string;
    category: string;
    type?: 'standard' | 'image-grid' | 'single-image-options' | 'video' | string;
    questions?: TestQuestion[];
    results?: TestResult[];
    src?: string;
    videoUrl?: string;
}
