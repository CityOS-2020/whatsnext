using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WhatsNext.Models
{
    public class ContentModel
    {
        public long Id { get; set; }
        public string ImgUrl { get; set; }
        public string MainTextLeft { get; set; }
        public string MainTextRight { get; set; }
        public string TitleLeft	{ get; set; }
        public string TitleRight { get; set; }
        public string Message1Left { get; set; }
        public string Message1Right { get; set; }
        public string Message2Left { get; set; }
        public string Message2Right { get; set; }
        public string Message3Left { get; set; }
        public string Message3Right { get; set; }
        public string Message4Left { get; set; }
        public string Message4Right { get; set; }
        public int Duration { get; set; }
        public int Animation { get; set; }
        public string Display { get; set; }
        public string MediaType { get; set; }
        //public string Friends { get; set; }
        //public string Interests { get; set; }
        public List<string> Friends { get; set; }
        public List<string> Interests { get; set; }
    }
}