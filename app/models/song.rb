class Song < ActiveRecord::Base
    has_attached_file :icon,   
    styles: { thumb: '100x100>', medium: '300x300>'},   
    default_url: '/images/:style/missing.png' 
    
    validates_attachment :icon, 
    content_type: { content_type: ['image/jpeg', 'image/png', 'image/gif'] } 
end
