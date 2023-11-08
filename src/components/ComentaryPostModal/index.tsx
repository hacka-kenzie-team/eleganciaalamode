import { UserNameTag } from "../UserNameTag"

export const ComentaryPostModal = () => {
    return (
        <div>
            <dialog open>
                <div>
                    <UserNameTag />
                    <textarea name="comentary-post" id="comentary-post" cols={30} rows={10}></textarea>
                    <div>
                        <span>Avaliação</span>
                        <ul>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                            <li>5</li>
                            <li>6</li>
                            <li>7</li>
                            <li>8</li>
                            <li>9</li>
                            <li>10</li>
                        </ul>
                    </div>
                    <button type="button">POSTAR</button>
                </div>
            </dialog>
        </div>
    )
}