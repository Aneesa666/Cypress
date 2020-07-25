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
                    params.CHOICES == 'test'
                }
            }
            steps {
                bat '''npm run %CHOICES%'''
            }           
        }
        stage('RunHeadTest') {
            when {  
                expression { 
                    params.CHOICES == 'headTest'
                }
            }
            steps {
                bat '''npm run %CHOICES%'''
            }           
        }
        stage('RunChromeTest') {
            when {  
                expression { 
                    params.CHOICES == 'chromeTest'
                }
            }
            steps {
                bat '''npm run %CHOICES%'''
            }           
        }
        stage('RunDashboardTest') {
            when {  
                expression { 
                    params.CHOICES == 'recordDashBoardTest'
                }
            }
            steps {
                bat '''npm run %CHOICES% %cypress_key%'''
                bat '''npx mochawesome-merge "cypress/results/*.json" > mochawesome.json'''
                bat '''npx marge mochawesome.json'''

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
                    params.CHOICES == 'PractiseTest'
                }
            }
            steps {
                bat '''npm run %CHOICES%'''
            }           
        }
        stage('RunJenkinsTest') {
            when {  
                expression { 
                    params.CHOICES == 'test-jenkins'
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
