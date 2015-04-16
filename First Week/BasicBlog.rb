class Post
	def initialize
	puts "¿Qué día es hoy?"
	@date = gets.chomp						#Al preguntar la variable date se introduce la fecha
	puts = "¿Cuál es el título del post?"
	@title = gets.chomp						#Al preguntar la variable title se introduce el título
	puts ="Introduce el texto del post"
	@text = gets.chomp						#Al preguntar la variable text se introduce el texto del post
	end
end
class Blog
	def initialize
		@post =Array.new		#He creado este array dentro de la clase Blog que
								#para contener todos los post
	end
	def save
		@post.push(post)		#con este método guardo los post
	end
	def muestra_post			#con este método muestro los post
		@post.each do |post|
			puts post.muestra
		end
end
miBlog = Blog.new
firstPost = Post.new
puts "#{@date}#{@title}#{@text}"
secondPost = Post.new
puts "#{@date}#{@title}#{@text}"
thirdPost = Post.new
puts "#{@date}#{@title}#{@text}"
miblog.save(firstPost)
miblog.save(secondPost)
miblog.save(thirdPost)
miblog.muestra_post
