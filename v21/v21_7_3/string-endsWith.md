## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|14,477,157|7238579|
|(short string) (true) String#slice and strict comparison|15,069,165|7534583|
|(long string) (true) String#endsWith|14,054,654|7027328|
|(long string) (true) String#slice and strict comparison|15,213,110|7606556|
|(short string) (false) String#endsWith|15,058,395|7529198|
|(short string) (false) String#slice and strict comparison|15,103,870|7551936|
|(long string) (false) String#endsWith|14,647,118|7323560|
|(long string) (false) String#slice and strict comparison|15,167,030|7583516|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:39:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":14477157.478829555,"samples":7238579},{"name":"(short string) (true) String#slice and strict comparison","opsSec":15069165.638304405,"samples":7534583},{"name":"(long string) (true) String#endsWith","opsSec":14054654.229141908,"samples":7027328},{"name":"(long string) (true) String#slice and strict comparison","opsSec":15213110.569830032,"samples":7606556},{"name":"(short string) (false) String#endsWith","opsSec":15058395.879499648,"samples":7529198},{"name":"(short string) (false) String#slice and strict comparison","opsSec":15103870.882329552,"samples":7551936},{"name":"(long string) (false) String#endsWith","opsSec":14647118.740294077,"samples":7323560},{"name":"(long string) (false) String#slice and strict comparison","opsSec":15167030.938275583,"samples":7583516}]}-->
