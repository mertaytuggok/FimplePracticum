import styles from "../Css/Box.module.css"
export default function Box({ grid, handleClick }) {
    return (
        <div className={styles.Box}>
            {grid.map((item, index) => {
                if (item === "") {
                    return (
                        <div
                            key={index}
                            className={styles.square}
                            onClick={() => handleClick(index)}>
                            {item}
                        </div>
                    )
                } else {
                    return (
                        <div
                            key={index}
                            className={styles.clicked}>
                            {item}
                        </div>
                    );
                }
            })}
        </div>
    )
}

