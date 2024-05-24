FROM node:lts-bookworm

WORKDIR /workspaces/cosi-103a


COPY public/ /workspaces/cosi-103a/public
COPY src/ /workspaces/cosi-103a/src
COPY backend/ ../backend/
COPY landingPage/ /workspaces/cosi-103a/

COPY package*.json ./


RUN npm install
RUN npm install react
RUN npm install react-bootstrap bootstrap
RUN npm install --save-dev jest
RUN npm install react-scripts --save-dev
RUN npm install react-router-dom@5.3.4

EXPOSE 3000

# Set CMD
CMD ["npm", "start"]