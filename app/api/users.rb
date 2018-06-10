class Users < Grape::API
  helpers ApiHelpers::ResponseHelper
  helpers ApiHelpers::ErrorsHelper
  resource :users do
    desc 'POST /api/users/signin'
    post '/signin' do
      user = User.find_by(email: params["user"]["email"], password: params["user"]["password"])
      error_invalid if user.nil?
      api_get(:user, user, UserEntity, 'success_message.users.login')
    end
  end
end
