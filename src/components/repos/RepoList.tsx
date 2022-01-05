import { useContext } from "react"
import { GithubContext } from "../../context/github/GithubProvider"
import RepoItem from "./RepoItem"


const RepoList = () => {
    const {repos} = useContext(GithubContext)

    return (
        <div className="rounded-lg shadow-lg card bg-base-100">
            <div className="card-body">
                <h2 className="text-3xl my-4 font-bold card-title">
                    Lastest Repositories
                </h2>
                {repos.map((repo,index) => (
                    <p><RepoItem key={index} repo={repo}/></p>
                ))}
            </div>
        </div>
    )
}

export default RepoList