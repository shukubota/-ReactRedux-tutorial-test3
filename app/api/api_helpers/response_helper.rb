# frozen_string_literal: true

module ApiHelpers

  module ResponseHelper

    def api_get(name, object, entity, success_msg)
      if object.present?
        status 200
        present :message, 'success' 
        present name, object, with: entity
      else
        error_server
      end
    end
  end
end
