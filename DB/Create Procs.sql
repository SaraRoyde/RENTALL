--check if user is admin 



go 

create function f_getUserId(@email varchar(15),@password varchar(8))
returns int
as
begin
declare @out int = 0

	select @out = id 
	from tbl_landlord 
	where @email = email and @password = password 

	if(@out = 0) 
	begin
		select @out = id 
		from tbl_admin 
		where @email = email and @password = password 
	end

	return @out
end

go 

--check if user is Admin 
create function f_isAdmin(@id int)
returns int
as
begin
declare @out int = 0
	
	select @out = 1
	from tbl_admin 
	where @id = id

	return @out
end
