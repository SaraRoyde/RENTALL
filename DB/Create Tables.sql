--�� ���� ��� ���� ����� ������ ������
--��� ���� ����� ����
--�� ����� ���� �� �� �������. 
--�� �� ����� ����� ���� ������ �����. 



--���� �����
create table tbl_location (
	id int primary key identity,
	locationX float,
	locationY float,
	location nvarchar(50)
)
go
--��� ���� ����� ��������
create table tbl_field_type (
	id int primary key identity,
	type nvarchar(10)
)
go
--���� ������ ������� ������
create table tbl_time (
	id int primary key identity,
	time nvarchar(10)
)
go

create table tbl_contact (
	id int primary key identity,
	email1 nvarchar(320),
	email2 nvarchar(320),
	phone1 nvarchar(320),
	phone2 nvarchar(320)
)

go

--���� �������
create table tbl_landlord (
	id int primary key identity, 
	name nvarchar(50) not null,
	password nvarchar(8) not null,
	email nvarchar(320),

	--��� ����� ���� ������ ���� �� ������� ������ ������ ��� ����� ����� �����. 
)
go

--���� �������� 
create table tbl_category (
	id int primary key identity,
	name nvarchar(25),
	parent int foreign key references tbl_category(id)
)
go 

--���� ������
create table tbl_item (
	id int primary key identity,
	name nvarchar(50) not null,
	details nvarchar(MAX),
	active bit,
	landlord int foreign key references tbl_landlord(id) not null,
	contact int foreign key references tbl_contact(id),
	category int foreign key references tbl_category(id),
	subCategory int foreign key references tbl_category(id)
)
go


create table tbl_image (
	id int primary key identity, 
	image nvarchar(MAX),
	item int foreign key references tbl_item(id)
)
go
--���� ������
create table tbl_price (
	id int primary key identity,
	time int foreign key references tbl_time(id),--"second", "minute", "hour", "day","month", "year"
	item int foreign key references tbl_item(id),
	price float,
)
go

--���� ������ ��������
create table tbl_dinamic (
	id int primary key identity,
	name nvarchar(50),
	type int foreign key references tbl_field_type(id),
	value nvarchar(MAX),
)
go

--���� ������� �����
create table tbl_locations_of_item (
	id int primary key identity,
	item int foreign key references tbl_item(id),
	location int foreign key references tbl_location(id),
)
go

--���� �����
create table tbl_tag (
	id int primary key identity,
	name nvarchar(MAX)
)
go 

--���� ����� �����
create table tbl_tag_of_item (
	id int primary key identity,
	item int foreign key references tbl_item(id),
	tag int foreign key references tbl_tag(id)
)

--���� �������
create table tbl_history (
	id int primary key,
	details nvarchar(MAX)
)

--���� ����� �����
create table tbl_admin (
	id int primary key identity,
	name nvarchar(20),
	password nvarchar(8),
	email nvarchar(320)
)
