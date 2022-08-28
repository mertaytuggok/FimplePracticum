import styles from "../Css/EndGame.module.css"

export default function EndGame({ restartGame, player, draw }) {
    return (
        <div className={styles.screen}>
            {!draw && <span className={styles.text}>{player ? "O Kazandı" : "X Kazandı"}</span>}
            {draw && <span className={styles.text}>BERABERLİK</span>}

            <button className={styles.btn} onClick={restartGame}>
                Yeni Oyun
            </button>
        </div>
    )
}