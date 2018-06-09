class Users < Grape::API
  resource :users do
    desc 'POST /api/users/signin'
    post '/signin' do
      api_get(:user, user, UserEntity, 'success_message.users.login')
    end
  end
end
