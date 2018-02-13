using System.Linq;
using AutoMapper;
using DatingApp.API.Data_Transfer_Objects;
using DatingApp.API.Models;

namespace DatingApp.API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<User, UserForListDto>()
                .ForMember(dest => dest.PhotoUrl, option =>
                {
                    option.MapFrom(src => src.Photos.FirstOrDefault(p => p.IsMain).Url);
                })
                .ForMember(dest => dest.Age, option =>
                {
                    option.ResolveUsing(d => d.DateOfBirth.CalcuateAge());
                });

            CreateMap<User, UserForDetailedDto>()
            .ForMember(dest => dest.PhotoUrl, option =>
            {
                option.MapFrom(src => src.Photos.FirstOrDefault(p => p.IsMain).Url);
            })
                .ForMember(dest => dest.Age, option =>
                {
                    option.ResolveUsing(d => d.DateOfBirth.CalcuateAge());
                });

            CreateMap<Photo, PhotosForDetailedDto>();
        }
    }
}