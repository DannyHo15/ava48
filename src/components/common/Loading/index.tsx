import "./loading.css";
export const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-avatar-blue">
      <div className="loader">
        <div className="load-inner load-one"></div>
        <div className="load-inner load-two"></div>
        <div className="load-inner load-three"></div>
        <span className="text">AVATAR48</span>
      </div>
    </div>
  );
};
