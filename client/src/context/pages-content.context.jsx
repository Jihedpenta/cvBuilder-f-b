import { createContext, useEffect, useState } from 'react';
import { RESUME_CONTENT } from '../resume_data';

export const PagesContentContext = createContext({
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

export const PagesContentProvider = ({children})=>{
    const [resumeContent,setResumeContent]= useState(RESUME_CONTENT);
    const [pagesContent,setPagesContent]= useState([{}]);
    const [pagesHeight,setPagesHeight]= useState([]);
    const [contentToFill,setContentToFill]= useState(RESUME_CONTENT.data);
    const [industry,setIndustry]= useState(RESUME_CONTENT.industry);
    const [language,setLanguage]= useState(RESUME_CONTENT.lang);
    const [pentaContact,setPentaContact]= useState(RESUME_CONTENT.penta_contact);


    const value = {pagesContent, setPagesContent, pagesHeight, setPagesHeight, resumeContent,setResumeContent,contentToFill,setContentToFill,industry,setIndustry, language,setLanguage,pentaContact,setPentaContact};




    return (
        <PagesContentContext.Provider value={value}>{children}</PagesContentContext.Provider>
    );
};