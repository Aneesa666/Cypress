pipeline {
    agent 
    {
        label "master"
    }

    parameters { 
        choice(name: 'CHOICES', choices: ['test', 'headTest', 'chromeTest','recordDashBoardTest','PractiseTest','test-jenkins'], description: '')
        password(name: 'cypress_key', defaultValue: '4fbf99ef-7a80-450d-8f59-faef24886c2c', description: 'A secret password') 
    }

    stages {
        stage('Checkout') {
            steps {
               checkout([$class: 'GitSCM', branches: [[name: '*/master']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[credentialsId: 'git_usr', url: 'https://github.com/Aneesa666/cypress.git']]])
            }
        }
        stage('Init') {
            steps {
                bat '''npm install'''
            }
        }
        stage('RunTest') {
            when {  
                expression { 
                    params.name == 'test'
                }
            }
            steps {
                bat '''npm run %CHOICES%'''
            }           
        }
        stage('RunHeadTest') {
            when {  
                expression { 
                    params.name == 'headTest'
                }
            }
            steps {
                bat '''npm run %CHOICES%'''
            }           
        }
        stage('RunChromeTest') {
            when {  
                expression { 
                    params.name == 'chromeTest'
                }
            }
            steps {
                bat '''npm run %CHOICES%'''
            }           
        }
        stage('RunDashboardTest') {
            when {  
                expression { 
                    params.name == 'recordDashBoardTest'
                }
            }
            steps {
                bat '''npm run %CHOICES% %cypress_key%'''
            }   
            post{
                always {
                    publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: 'mochawesome-report\\', reportFiles: 'mochawesome.html', reportName: 'HTML Report', reportTitles: ''])
                }     
            }   
        }
        stage('RunPractiseTest') {
            when {  
                expression { 
                    params.name == 'PractiseTest'
                }
            }
            steps {
                bat '''npm run %CHOICES%'''
            }           
        }
        stage('RunJenkinsTest') {
            when {  
                expression { 
                    params.name == 'test-jenkins'
                }
            }
            steps {
                bat '''npm run %CHOICES%'''
            }    
            post{
                always {
                    junit allowEmptyResults: true, testResults: 'reports\\*.xml'
                }  
            }     
        }
    }  
}
