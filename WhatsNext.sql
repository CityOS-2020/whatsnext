USE [master]
GO
/****** Object:  Database [WhatsNext]    Script Date: 16.4.2016 8:06:45 ******/
CREATE DATABASE [WhatsNext]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'WhatsNext', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL12.SQLEXPRESS\MSSQL\DATA\WhatsNext.mdf' , SIZE = 5120KB , MAXSIZE = UNLIMITED, FILEGROWTH = 1024KB )
 LOG ON 
( NAME = N'WhatsNext_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL12.SQLEXPRESS\MSSQL\DATA\WhatsNext_log.ldf' , SIZE = 1024KB , MAXSIZE = 2048GB , FILEGROWTH = 10%)
GO
ALTER DATABASE [WhatsNext] SET COMPATIBILITY_LEVEL = 120
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [WhatsNext].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [WhatsNext] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [WhatsNext] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [WhatsNext] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [WhatsNext] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [WhatsNext] SET ARITHABORT OFF 
GO
ALTER DATABASE [WhatsNext] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [WhatsNext] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [WhatsNext] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [WhatsNext] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [WhatsNext] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [WhatsNext] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [WhatsNext] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [WhatsNext] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [WhatsNext] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [WhatsNext] SET  DISABLE_BROKER 
GO
ALTER DATABASE [WhatsNext] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [WhatsNext] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [WhatsNext] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [WhatsNext] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [WhatsNext] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [WhatsNext] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [WhatsNext] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [WhatsNext] SET RECOVERY FULL 
GO
ALTER DATABASE [WhatsNext] SET  MULTI_USER 
GO
ALTER DATABASE [WhatsNext] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [WhatsNext] SET DB_CHAINING OFF 
GO
ALTER DATABASE [WhatsNext] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [WhatsNext] SET TARGET_RECOVERY_TIME = 0 SECONDS 
GO
ALTER DATABASE [WhatsNext] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'WhatsNext', N'ON'
GO
USE [WhatsNext]
GO
/****** Object:  Table [dbo].[Approaches]    Script Date: 16.4.2016 8:06:45 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Approaches](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[FKUser] [bigint] NOT NULL,
	[EventTime] [datetime] NULL,
 CONSTRAINT [PK_Approaches] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Interests]    Script Date: 16.4.2016 8:06:45 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Interests](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NOT NULL,
	[FKInterest] [bigint] NULL,
 CONSTRAINT [PK_Interests] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Roles]    Script Date: 16.4.2016 8:06:45 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Roles](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NULL,
 CONSTRAINT [PK_Roles] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Users]    Script Date: 16.4.2016 8:06:45 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[FirstName] [nvarchar](50) NULL,
	[MiddleName] [nvarchar](50) NULL,
	[LastName] [nvarchar](50) NULL,
	[UserName] [nvarchar](50) NOT NULL,
	[HomeTown] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_Users] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Users_Interests]    Script Date: 16.4.2016 8:06:45 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users_Interests](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[FKUser] [bigint] NOT NULL,
	[FKInterest] [bigint] NOT NULL,
 CONSTRAINT [PK_Users_Interests] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Users_Roles]    Script Date: 16.4.2016 8:06:45 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users_Roles](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[FKUser] [bigint] NOT NULL,
	[FKRole] [bigint] NOT NULL,
 CONSTRAINT [PK_Users_Roles] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET IDENTITY_INSERT [dbo].[Interests] ON 

INSERT [dbo].[Interests] ([Id], [Name], [FKInterest]) VALUES (1, N'Sports', NULL)
INSERT [dbo].[Interests] ([Id], [Name], [FKInterest]) VALUES (2, N'Food', NULL)
INSERT [dbo].[Interests] ([Id], [Name], [FKInterest]) VALUES (3, N'History', NULL)
INSERT [dbo].[Interests] ([Id], [Name], [FKInterest]) VALUES (4, N'Culture', NULL)
INSERT [dbo].[Interests] ([Id], [Name], [FKInterest]) VALUES (5, N'SiteSeeing', NULL)
INSERT [dbo].[Interests] ([Id], [Name], [FKInterest]) VALUES (6, N'BoatRides', NULL)
INSERT [dbo].[Interests] ([Id], [Name], [FKInterest]) VALUES (7, N'Dining', NULL)
INSERT [dbo].[Interests] ([Id], [Name], [FKInterest]) VALUES (8, N'Sales', NULL)
SET IDENTITY_INSERT [dbo].[Interests] OFF
SET IDENTITY_INSERT [dbo].[Users] ON 

INSERT [dbo].[Users] ([Id], [FirstName], [MiddleName], [LastName], [UserName], [HomeTown]) VALUES (1, N'a', N'a', N'a', N'a', N'a')
INSERT [dbo].[Users] ([Id], [FirstName], [MiddleName], [LastName], [UserName], [HomeTown]) VALUES (2, N'b', N'b', N'b', N'b', N'b')
INSERT [dbo].[Users] ([Id], [FirstName], [MiddleName], [LastName], [UserName], [HomeTown]) VALUES (3, N'c', N'c', N'c', N'c', N'c')
SET IDENTITY_INSERT [dbo].[Users] OFF
ALTER TABLE [dbo].[Approaches]  WITH CHECK ADD  CONSTRAINT [FK_Approaches_Users] FOREIGN KEY([FKUser])
REFERENCES [dbo].[Users] ([Id])
GO
ALTER TABLE [dbo].[Approaches] CHECK CONSTRAINT [FK_Approaches_Users]
GO
ALTER TABLE [dbo].[Interests]  WITH CHECK ADD  CONSTRAINT [FK_Interests_Interests] FOREIGN KEY([FKInterest])
REFERENCES [dbo].[Interests] ([Id])
GO
ALTER TABLE [dbo].[Interests] CHECK CONSTRAINT [FK_Interests_Interests]
GO
ALTER TABLE [dbo].[Users_Interests]  WITH CHECK ADD  CONSTRAINT [FK_Users_Interests_Interests] FOREIGN KEY([FKInterest])
REFERENCES [dbo].[Interests] ([Id])
GO
ALTER TABLE [dbo].[Users_Interests] CHECK CONSTRAINT [FK_Users_Interests_Interests]
GO
ALTER TABLE [dbo].[Users_Interests]  WITH CHECK ADD  CONSTRAINT [FK_Users_Interests_Users] FOREIGN KEY([FKUser])
REFERENCES [dbo].[Users] ([Id])
GO
ALTER TABLE [dbo].[Users_Interests] CHECK CONSTRAINT [FK_Users_Interests_Users]
GO
ALTER TABLE [dbo].[Users_Roles]  WITH CHECK ADD  CONSTRAINT [FK_Users_Roles_Roles] FOREIGN KEY([FKRole])
REFERENCES [dbo].[Roles] ([Id])
GO
ALTER TABLE [dbo].[Users_Roles] CHECK CONSTRAINT [FK_Users_Roles_Roles]
GO
ALTER TABLE [dbo].[Users_Roles]  WITH CHECK ADD  CONSTRAINT [FK_Users_Roles_Users] FOREIGN KEY([FKUser])
REFERENCES [dbo].[Users] ([Id])
GO
ALTER TABLE [dbo].[Users_Roles] CHECK CONSTRAINT [FK_Users_Roles_Users]
GO
USE [master]
GO
ALTER DATABASE [WhatsNext] SET  READ_WRITE 
GO
