pipeline {
   agent any
   
   tools {nodejs "node"}

   stages {
      stage('clone the repo') {
         steps {
            git 'https://github.com/jerridbain/QaClass2.git'
         }
      }
      
      stage('Install dependencies') {
         steps {
            sh 'ls'
            sh 'npm install'
         }
      }
      
     stage('run test') {
         steps {
            sh 'headless=true npm run test'
         }
      }

      stage('reports') {
         steps {
            script {
               allure([
                  includeProperties: false,
                  jdk: '',
                  properties: [],
                  reportBuildPolicy: 'ALWAYS',
                  results: [[path: 'allure-results']]
               ])
            }
         }
      }
   }
}
