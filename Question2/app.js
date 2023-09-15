function getSolution(nums, target) {
    const solution = [];

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                solution.push([i, j]);
            }
        }
    }

    return solution;
}

const nums = [1, 3, 4, 5, 7, 11];
const target = 9;
const result = getSolution(nums, target);

console.log(result); 