pipeline {
    agent any

    tools {
        nodejs "NODE_16.15.0"
    }

    environment {
        BUILD_TRIGGER_BY = "${currentBuild.getBuildCauses()[0].shortDescription}"
    }

    post {
        always {
            discordSend description: "${BUILD_TRIGGER_BY} build on branch: ${env.GIT_BRANCH}",
            footer: "Kairos Jenkins",
            link: env.BUILD_URL,
            result: currentBuild.currentResult,
            unstable: false,
            title: JOB_NAME,
            webhookURL: "${DISCORD_WEBHOOK_URL}"
        }
    }

    stages {
        stage("Check version") {
            steps {
                sh "node -v"
                sh "npm -v"
            }
        }
        stage("Clean & Build") {
            steps {
                sh "rm -rf ./docs/.vuepress/dist"
                sh "npm install && npm run build"
            }
        }
        stage("Deploy to Dev") {
            steps {
                echo "Deploying.."
                script {
                    def remote = [:]
                    remote.name = "${DEV_SERVER_USER}"
                    remote.host = "${DEV_SERVER_HOST}"
                    remote.allowAnyHosts = true
                    withCredentials([usernamePassword(credentialsId: "dev-server-remote-account", passwordVariable: "password", usernameVariable: "userName")]) {
                        remote.user = userName
                        remote.password = password
                        sshCommand remote: remote, command: "cd ~/kairos/docs && docker compose stop \
                                                             && mv dist ./backup/dist_\$(date +%Y-%m-%d-%H-%M-%S)"
                        sshPut     remote: remote, from:    "${WORKSPACE}/docs/.vuepress/dist", into: "/home/${DEV_SERVER_USER}/kairos/docs/"
                        sshCommand remote: remote, command: "cd ~/kairos/docs && docker compose start"
                    }
                }
            }
        }
    }
}
