import { useRef } from "react";

export default function useInitilizeRefs(){
    const containerRef = useRef(null);
    const headerRef = useRef(null);
    const topPageRef = useRef(null);
    const summaryRef = useRef(null);
    const educationRef = useRef(null);
    const certifRef = useRef(null);
    const workExpRef = useRef(null);
    const projectRef = useRef(null);
    const skillRef = useRef(null);
    const toolRef = useRef(null);
    const langRef = useRef(null);
    return {containerRef,headerRef,topPageRef,summaryRef,educationRef,certifRef,workExpRef,projectRef,skillRef,toolRef,langRef}
}