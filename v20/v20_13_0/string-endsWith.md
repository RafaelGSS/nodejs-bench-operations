## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|15,108,782|7554392|
|(short string) (true) String#slice and strict comparison|18,384,197|9192099|
|(long string) (true) String#endsWith|14,901,118|7450560|
|(long string) (true) String#slice and strict comparison|18,503,398|9251700|
|(short string) (false) String#endsWith|15,288,817|7644409|
|(short string) (false) String#slice and strict comparison|18,427,000|9213501|
|(long string) (false) String#endsWith|15,160,384|7580193|
|(long string) (false) String#slice and strict comparison|18,405,475|9202738|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:11:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":15108782.428691303,"samples":7554392},{"name":"(short string) (true) String#slice and strict comparison","opsSec":18384197.926462818,"samples":9192099},{"name":"(long string) (true) String#endsWith","opsSec":14901118.390673246,"samples":7450560},{"name":"(long string) (true) String#slice and strict comparison","opsSec":18503398.96389668,"samples":9251700},{"name":"(short string) (false) String#endsWith","opsSec":15288817.69432277,"samples":7644409},{"name":"(short string) (false) String#slice and strict comparison","opsSec":18427000.488957293,"samples":9213501},{"name":"(long string) (false) String#endsWith","opsSec":15160384.635584556,"samples":7580193},{"name":"(long string) (false) String#slice and strict comparison","opsSec":18405475.042951666,"samples":9202738}]}-->
