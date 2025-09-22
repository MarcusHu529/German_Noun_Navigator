German Noun Navigator
A simple web application that helps you find the correct German articles (der, die, das) for any noun, along with its gender and English translation.

✨ Features
1. Article Lookup: Get the definite and indefinite articles for a German noun.

2. Gender Identification: Correctly identifies the gender of the noun (masculine, feminine, or neuter).

3. English Translation: Provides a quick translation to help with your studies.

4. Example Sentences: Generate a simple German sentence using the noun and its English translation.

💻 Tech Stack
1. Frontend: HTML, Tailwind CSS, JavaScript

2. Backend: Netlify Functions (Node.js)

3. AI Model: Google Gemini API


🚀 How to Run Locally
1. Clone the repository:
    - git clone [your-repository-url]

2. Install dependencies:
    - npm install

3. Set up your environment variables:
    - Create a .env file in the root of your project.
    - GEMINI_API_KEY=your_gemini_api_key_here
(Note: You only need this for local development. For production on Netlify, you will set this variable in their dashboard.)

4. Start the server:
    - To run this application locally, you'll need the netlify-cli to simulate the serverless environment.
        - curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
          sudo apt-get install -y nodejs
            - Check: node -v 
                    npm -v
        - npm install -g netlify-cli
            - Check: netlify --version
        - cd ~/projects/German_Noun_Navigator
        - netlify dev
    - Open your browser and navigate to http://localhost:8888.

☁️ Deployment
This application is designed to be easily deployed on Netlify.
1. Link your repository on Netlify.

2. Configure build settings:
    -Build command: npm install
    -Publish directory: public

3. Set up the environment variable:
    - In the Netlify dashboard, go to Site settings > Build & deploy > Environment variables.
    - Add a new variable:
    - Key: GEMINI_API_KEY
    - Value: Your actual Gemini API key
    - Check: "Contains secret values"

4. Netlify will automatically build and deploy your site, running the serverless function to handle all API requests.

✍️ Citation
The core coding logic and structure of this application, including the frontend JavaScript, the Node.js serverless function, and the deployment instructions, were developed and provided by the Gemini 2.5 Flash version large language model