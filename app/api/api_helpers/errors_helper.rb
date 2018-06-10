module ApiHelpers

  module ErrorsHelper
    def error_invalid
      error!({ error_msg: 'cannot log in',
               error_code: '400' },
             400)
    end

    def error_server
      error!({ error_msg: 'server error',
               error_code: '500' },
             500)
    end
  end
end
