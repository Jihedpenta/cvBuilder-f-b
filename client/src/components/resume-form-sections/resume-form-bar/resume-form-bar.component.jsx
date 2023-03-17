import React, { useState } from "react";

import SaveIcon from "@mui/icons-material/Save";
import DownloadIcon from "@mui/icons-material/Download";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import useCrudResume from "../../../hooks/useCrudResume";
import useResume from "../../../hooks/useResume";
import useGetUserId from "../../../hooks/useGetUserId";
import objectToFormData from "../../../utils/object-to-formdata";

const ResumeFormBar = () => {
  const queryClient = useQueryClient();
  const { createResume, updateResume } = useCrudResume();
  const { mutateAsync } = useMutation(createResume);
  const { industry, pentaContact, language, resumeContent, setResumeId, resumeId } = useResume();
  const getUserId = useGetUserId();
  const navitage = useNavigate();
  const [saved, setSaved] = useState(false)
  const saveResume = async (event) => {
    const userId = getUserId();
    const body = {
      industry: industry,
      lang: language,
      pentaContact: pentaContact,
      data: resumeContent,
      author: userId,
    };
    const formData = objectToFormData(body);


    if (resumeId === '') {
      const response = await createResume(formData)
      setResumeId(response.resume._id)
      navitage("/resume-construction/" + response.resume._id);
    } else {
      const response = updateResume(resumeId, formData)
    }

  };

  const saveAndPrintResume = () => {
      
  };
  return (
    <div
      style={{
        backgroundColor: "#245097",
        width: "inherit",
        bottom: 0,
        position: "fixed",
        padding: "10px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Button
        variant="outline"
        sx={{ color: "white" }}
        onClick={saveAndPrintResume}
        disabled={!saved}
      >
        <DownloadIcon />
        Download PDF
      </Button>

      <Button sx={{ color: "white" }} onClick={saveResume}>
        <SaveIcon />
        Save
      </Button>
    </div>
  );
};

export default ResumeFormBar;
