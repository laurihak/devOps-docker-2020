FROM ruby:2.6.0
WORKDIR /app
RUN apt-get update && apt-get install git -y && apt-get install node.js -y
RUN git clone https://github.com/docker-hy/rails-example-project.git
RUN gem install bundler
RUN cd rails-example-project && bundle install 
CMD cd rails-example-project && rails db:migrate RAILS_ENV=development && rails s

