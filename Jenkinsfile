node {
  stage('Checkout') {
    checkout scm
  }
  stage('Load profile') {
    sh 'source ~/.zprofile'
  }
  stage('Set ruby & node versions') {
    sh 'nvm install'
    sh 'rbenv install --skip-existing'
  }
  stage('Dependencies') {
    sh 'npm install -g yarn'
    sh 'yarn install --frozen-lockfile'
    sh 'yarn pods'
  }
}
