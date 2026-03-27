import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const Layout = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
  key={location.pathname}
  initial={{ opacity: 0, x: 80, scale: 0.98 }}
  animate={{ opacity: 1, x: 0, scale: 1 }}
  exit={{ opacity: 0, x: -80, scale: 0.98 }}
  transition={{ duration: 0.35, ease: "easeInOut" }}
>
        <Outlet />
      </motion.div>
    </AnimatePresence>
  );
};

export default Layout;