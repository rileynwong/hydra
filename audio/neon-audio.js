/* https://hydra.ojack.xyz/?code=JTJGJTJGJTIwbGljZW5zZWQlMjB3aXRoJTIwQ0MlMjBCWS1OQy1TQSUyMDQuMCUyMGh0dHBzJTNBJTJGJTJGY3JlYXRpdmVjb21tb25zLm9yZyUyRmxpY2Vuc2VzJTJGYnktbmMtc2ElMkY0LjAlMkYlMEElMkYlMkYlMjBWaXRhbHklMjBQYXZsZW5rbyUwQSUwQSUwQSgpJTNEJTNFYS5mZnQlNUIwJTVEJTBBYS5zaG93KCklMEElMEFzb2xpZCgpJTBBLmFkZChzaGFwZSgxMDAlMkMlMjAwLjUpLnJlcGVhdCgxMCUyQzEwKS5jb2xvcigxJTJDMCUyQzApLm1vZHVsYXRlU2NhbGUobm9pc2UoMykpKSUwQS5hZGQoc2hhcGUoMTAwJTJDJTIwMC41KS5yZXBlYXQoMTAlMkMxMCkuY29sb3IoMCUyQzAlMkMxKSUyMCUyMC5tb2R1bGF0ZUthbGVpZChvc2MoMSkua2FsZWlkKDEwMCklMkMoKSUzRCUzRWEuZmZ0JTVCMCU1RCkpJTBBLmFkZChzaGFwZSgxMDAlMkMlMjAwLjMpLnJlcGVhdCgxMCUyQzEwKS5jb2xvcigwJTJDMSUyQzApLm1vZHVsYXRlUm90YXRlKG5vaXNlKDUpKSklMEElMjAlMjAub3V0KCklMEE%3D */


// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
// Vitaly Pavlenko


()=>a.fft[0]
a.show()

solid()
.add(shape(100, 0.5).repeat(10,10).color(1,0,0).modulateScale(noise(3)))
.add(shape(100, 0.5).repeat(10,10).color(0,0,1)  .modulateKaleid(osc(1).kaleid(100),()=>a.fft[0]))
.add(shape(100, 0.3).repeat(10,10).color(0,1,0).modulateRotate(noise(5)))
  .out()
