using System;
using System.Collections.Generic;

#nullable disable

namespace Rentall_Sara_DL.Models
{
    public partial class TblLocation
    {
        public int Id { get; set; }
        public double? LocationX { get; set; }
        public double? LocationY { get; set; }
        public string Location { get; set; }
    }
}
