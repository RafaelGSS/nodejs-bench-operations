## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|15,667,524|7833763|
|(short string) (true) String#slice and strict comparison|16,575,361|8287681|
|(long string) (true) String#endsWith|14,358,633|7179317|
|(long string) (true) String#slice and strict comparison|16,297,353|8148677|
|(short string) (false) String#endsWith|14,489,492|7244747|
|(short string) (false) String#slice and strict comparison|16,491,846|8245924|
|(long string) (false) String#endsWith|15,992,197|7996099|
|(long string) (false) String#slice and strict comparison|16,463,680|8231841|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:35:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":15667524.169289667,"samples":7833763},{"name":"(short string) (true) String#slice and strict comparison","opsSec":16575361.997159591,"samples":8287681},{"name":"(long string) (true) String#endsWith","opsSec":14358633.752875837,"samples":7179317},{"name":"(long string) (true) String#slice and strict comparison","opsSec":16297353.240123952,"samples":8148677},{"name":"(short string) (false) String#endsWith","opsSec":14489492.048279235,"samples":7244747},{"name":"(short string) (false) String#slice and strict comparison","opsSec":16491846.908696039,"samples":8245924},{"name":"(long string) (false) String#endsWith","opsSec":15992197.236002797,"samples":7996099},{"name":"(long string) (false) String#slice and strict comparison","opsSec":16463680.034248468,"samples":8231841}]}-->
