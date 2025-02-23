import PropTypes from "prop-types";

function Content({ children }) {
  return <main>{children}</main>;
}

Content.propTypes = {
  children: PropTypes.node.isRequired, // بررسی می‌کند که پراپ children الزامی است.
};

export default Content;
