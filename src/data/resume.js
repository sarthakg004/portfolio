// Resume data structure - Fill in with your actual details
export const resumeData = {
    summary: "ML Engineer and AI Researcher specializing in OCR and generative models. Focused on building reliable ML systems with hands-on experience in Computer Vision and NLP. Currently pursuing an Integrated Dual Degree at IIT (BHU), Varanasi.",

    skills: {
        languages: ["Python", "JavaScript", "C++", "SQL"],
        frameworks: ["PyTorch", "TensorFlow", "React", "FastAPI"],
        tools: ["Git", "Docker", "AWS", "Jupyter"],
        domains: ["Machine Learning", "Computer Vision", "NLP", "OCR", "Data Science"]
    },

    // Key projects for resume (subset of all projects)
    keyProjects: [
        {
            title: "Credit Card Fraud Detection",
            description: "Real-time fraud detection system using ensemble ML models",
            technologies: ["Python", "CatBoost", "Scikit-learn"],
            highlights: [
                "Achieved 92% F1 score on imbalanced dataset",
                "Processed 100k+ transaction samples",
                "Implemented SMOTE and undersampling techniques"
            ]
        },
        {
            title: "OCR Engine for Historical Documents",
            description: "Custom OCR system for digitizing historical manuscripts",
            technologies: ["PyTorch", "CRAFT", "LSTM", "Attention"],
            highlights: [
                "95.96% character-level accuracy",
                "Specialized for Spanish historical manuscripts",
                "CNN-LSTM architecture with attention mechanism"
            ]
        },
        {
            title: "Machine Translation (Transformer)",
            description: "Neural machine translation using custom Transformer architecture",
            technologies: ["PyTorch", "Transformers", "NLP"],
            highlights: [
                "English → Hindi translation",
                "Transformer architecture from scratch",
                "Multi-head self-attention implementation"
            ]
        }
    ]
}
