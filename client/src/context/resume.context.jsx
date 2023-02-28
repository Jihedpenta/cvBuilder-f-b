import { createContext,  useState } from 'react';

export const ResumeContext = createContext({
    pagesContent :[],
    setPagesContent : ()=>{},
    pagesHeight : [],
    setPagesHeight : ()=>{},
    resumeContent : {},
    setResumeContent : ()=>{},
    contentToFill : {},
    setContentToFill : ()=>{},
    industry : {},
    setIndustry : ()=>{},
    language : {},
    setLanguage : ()=>{},
    pentaContact : {},
    setPentaContact : ()=>{},
})

export const ResumeProvider = ({children})=>{
    const [resumeContent,setResumeContent]= useState({});
    const [pagesContent,setPagesContent]= useState([{}]);
    const [pagesHeight,setPagesHeight]= useState([]);
    const [contentToFill,setContentToFill]= useState({});
    const [industry,setIndustry]= useState('');
    const [language,setLanguage]= useState('');
    const [pentaContact,setPentaContact]= useState({});
    const value = {
        pagesContent, 
        setPagesContent, 
        pagesHeight, 
        setPagesHeight, 
        resumeContent,
        setResumeContent,
        contentToFill,
        setContentToFill,
        industry,
        setIndustry, 
        language,
        setLanguage,
        pentaContact,
        setPentaContact
    };
    return (
        <ResumeContext.Provider value={value}>{children}</ResumeContext.Provider>
    );
};