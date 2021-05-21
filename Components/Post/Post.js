import { useState, useRef, useEffect } from "react";
import PostActions from "./PostActions";
import PostMedia from "./PostMedia";
import AnimalTag from "../AnimalTag/AnimalTag";
import styles from "./post.module.css";

export default function Post({ postData, handleOptionRender }) {
  const [actionsVisibility, setActionsVisibility] = useState(
    "display-none opacity-0"
  );
  const [overlayVisibility, setOverlayVisibility] = useState(
    "display-flex-column opacity-100"
  );

  const observee = useRef(null);
  const [observing, setObserving] = useState(false);
  const observerCallback = (entries) => {
    const [entry] = entries;
    setObserving(entry.isIntersecting);
  };
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.9,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    if (observee.current) observer.observe(observee.current);

    return () => {
      if (observee.current) observer.unobserve(observee.current);
    };
  }, [observee, observerOptions]);

  const handlePostClick = (clickType) => {
    if (clickType === "overlay") {
      setTimeout(() => {
        setActionsVisibility("display-flex-column opacity-100");
        setOverlayVisibility("display-none opacity-0");
      }, 75);
      setActionsVisibility("display-flex-column opacity-0");
      setOverlayVisibility("display-flex-column opacity-0");
    } else {
      setTimeout(() => {
        setActionsVisibility("display-none opacity-0");
        setOverlayVisibility("display-flex-column opacity-100");
      }, 75);
      setActionsVisibility("display-flex-column opacity-0");
      setOverlayVisibility("display-flex-column opacity-0");
    }
  };

  return (
    <div
      ref={observee}
      className={`${styles.postContainer} border-radius-10 display-flex-column normal-shadow`}
    >
      <PostMedia
        postData={{
          src: postData.src,
          srcType: postData.srcType,
          description: postData.description,
        }}
        visibility={overlayVisibility}
        observing={observing}
      />
      <div
        onClick={() => handlePostClick("overlay")}
        className={`${styles.postUiOverlay} ${overlayVisibility} justify-between height-100 width-100 padding-5 padding-top-bottom-10`}
      >
        <AnimalTag
          name={postData.animal.name}
          type={postData.animal.type}
          avatar={postData.animal.avatar}
          gender={postData.animal.gender}
          alias={postData.animal.alias}
        />
        <p
          className={`${styles.postDescription} color-white weight-700 text-shadow-black margin-0`}
        >
          {postData.description}
        </p>
      </div>
      <div
        onClick={() => handlePostClick("actions")}
        className={`${styles.postActionsContainer} ${actionsVisibility} height-100 width-100 border-radius-10`}
      >
        <PostActions
          handleOptionRender={handleOptionRender}
          postData={postData}
        />
      </div>
    </div>
  );
}
