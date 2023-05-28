import Modal from "../ui/Modal"
import classes from "./Login.module.css";

const Login = (props) => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Username</span>
        {/* <span>Password</span> */}
      </div>
      <div className={classes.total}>
        {/* <span>Username</span> */}
        <span>Password</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>Close</button>
        <button className={classes.button}>Log In</button>
        <button className={classes.button}>Sign Up</button>
      </div>
    </Modal>
  );
};

export default Login;
