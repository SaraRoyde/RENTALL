using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace Rentall_Sara_API.Models
{
    public partial class RentallContext : DbContext
    {
        public RentallContext()
        {
        }

        public RentallContext(DbContextOptions<RentallContext> options)
            : base(options)
        {
        }

        public virtual DbSet<TblLocation> TblLocations { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=.;Database =Rentall;Trusted_Connection =True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "Hebrew_CI_AS");

            modelBuilder.Entity<TblLocation>(entity =>
            {
                entity.ToTable("tbl_location");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Location)
                    .HasMaxLength(50)
                    .HasColumnName("location");

                entity.Property(e => e.LocationX).HasColumnName("locationX");

                entity.Property(e => e.LocationY).HasColumnName("locationY");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
