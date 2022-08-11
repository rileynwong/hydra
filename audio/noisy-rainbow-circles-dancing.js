
// https://hydra.ojack.xyz/?code=JTJGJTJGJTIwbGljZW5zZWQlMjB3aXRoJTIwQ0MlMjBCWS1OQy1TQSUyMDQuMCUyMGh0dHBzJTNBJTJGJTJGY3JlYXRpdmVjb21tb25zLm9yZyUyRmxpY2Vuc2VzJTJGYnktbmMtc2ElMkY0LjAlMkYlMEElMkYlMkYlMjAlNDBuYW90b19oaWVkYSUwQSUwQSgpJTNEJTNFYS5mZnQlNUIwJTVEJTBBYS5zaG93KCklMEElMEFvc2MoMjAlMkMlMjAwLjElMkMlMjAwKS5jb2xvcigwJTJDJTIwMSUyQyUyMDkpLnJvdGF0ZSgxLjU3JTJGMikub3V0KG8xKSUwQW9zYygzMCUyQyUyMDAuMDElMkMlMjAwKS5jb2xvcigxJTJDJTIwMC43JTJDJTIwMSkubW9kdWxhdGUobzElMkMlMjAwKS5hZGQobzElMkMxKS5tb2R1bGF0ZVBpeGVsYXRlKG8xJTJDMSUyQzEwKSUwQW9zYygzMCUyQzAuMSUyQzEpLmNvbG9yYW1hKDEwMDApJTBBJTBBJTIwJTIwLm1vZHVsYXRlUmVwZWF0KG9zYygyMCkua2FsZWlkKDEwMCklMkMoKSUzRCUzRWEuZmZ0JTVCMCU1RCklMEElMjAlMjAubW9kdWxhdGVIdWUob3NjKDIwKSUyQygpJTNEJTNFYS5mZnQlNUIwJTVEKSUwQSUyMCUyMC5tb2R1bGF0ZVNjcm9sbFgob3NjKDIwKSUyQygpJTNEJTNFYS5mZnQlNUIwJTVEKSUwQSUyMCUyMC5tb2R1bGF0ZVNjYWxlKG9zYygxKSUyQygpJTNEJTNFYS5mZnQlNUIwJTVEKSUwQSUyMCUyMC5vdXQobzApJTBB
// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
// @naoto_hieda

()=>a.fft[0]
a.show()

osc(20, 0.1, 0).color(0, 1, 9).rotate(1.57/2).out(o1)
osc(30, 0.01, 0).color(1, 0.7, 1).modulate(o1, 0).add(o1,1).modulatePixelate(o1,1,10)
osc(30,0.1,1).colorama(1000)

  .modulateRepeat(osc(20).kaleid(100),()=>a.fft[0])
  .modulateHue(osc(20),()=>a.fft[0])
  .modulateScrollX(osc(20),()=>a.fft[0])
  .modulateScale(osc(1),()=>a.fft[0])
  .out(o0)
