import { createContext, useState } from "react";
export const ResumeContext = createContext({
  pagesContent: [], 
  setPagesContent: () => {},
  pagesHeight: [],
  setPagesHeight: () => {},
  resumeContent: {},
  setResumeContent: () => {},
  contentToFill: {},
  setContentToFill: () => {},
  industry: '',
  setIndustry: () => {},
  language: '',
  setLanguage: () => {},
  pentaContact: {},
  setPentaContact: () => {},
  resumeId: '',
  setResumeId: () => {},
});

export const ResumeProvider = ({ children }) => {

    /*const [resumeContent, setResumeContent] = useState(RESUME_CONTENT.data);
    const [pagesContent, setPagesContent] = useState([{}]);
    const [pagesHeight, setPagesHeight] = useState([]);
    const [contentToFill, setContentToFill] = useState({});
    const [industry, setIndustry] = useState(RESUME_CONTENT.industry);
    const [language, setLanguage] = useState(RESUME_CONTENT.lang);
    const [pentaContact, setPentaContact] = useState(RESUME_CONTENT.pentaContact);*/



  const [resumeContent, setResumeContent] = useState({});
  const [pagesContent, setPagesContent] = useState([{}]);
  const [pagesHeight, setPagesHeight] = useState([]);
  const [contentToFill, setContentToFill] = useState({});
  const [industry, setIndustry] = useState("");
  const [language, setLanguage] = useState("");
  const [pentaContact, setPentaContact] = useState({});
  const [resumeId, setResumeId] = useState("");

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
    setPentaContact,
    resumeId,
    setResumeId
  };
  return (
    <ResumeContext.Provider value={value}>{children}</ResumeContext.Provider>
  );
};
