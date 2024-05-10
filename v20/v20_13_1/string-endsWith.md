## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|16,120,285|8060143|
|(short string) (true) String#slice and strict comparison|20,050,319|10025160|
|(long string) (true) String#endsWith|15,731,196|7865599|
|(long string) (true) String#slice and strict comparison|19,945,290|9972646|
|(short string) (false) String#endsWith|16,301,679|8150840|
|(short string) (false) String#slice and strict comparison|19,998,911|9999456|
|(long string) (false) String#endsWith|16,194,333|8097167|
|(long string) (false) String#slice and strict comparison|19,339,169|9669585|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:10:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":16120285.064961983,"samples":8060143},{"name":"(short string) (true) String#slice and strict comparison","opsSec":20050319.238051433,"samples":10025160},{"name":"(long string) (true) String#endsWith","opsSec":15731196.143699685,"samples":7865599},{"name":"(long string) (true) String#slice and strict comparison","opsSec":19945290.04535794,"samples":9972646},{"name":"(short string) (false) String#endsWith","opsSec":16301679.57619177,"samples":8150840},{"name":"(short string) (false) String#slice and strict comparison","opsSec":19998911.28013659,"samples":9999456},{"name":"(long string) (false) String#endsWith","opsSec":16194333.708592858,"samples":8097167},{"name":"(long string) (false) String#slice and strict comparison","opsSec":19339169.96126663,"samples":9669585}]}-->
