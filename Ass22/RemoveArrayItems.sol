// SPDX-License-Identifier: MIT


pragma solidity ^0.8.6;

contract RemoveArrayItems {
    // Template for testing
    /*
        uint[] arr1 = [1, 2, 3];
        uint[] arr2 = [1, 2, 3, 4, 5, 6];
        uint[] arr3 = [1];
    */
    // New array to store shifted values
    uint[] newArr; 

    // get values from shifted array
    function getArrayValues() public view returns (uint[] memory) {
        return newArr;
    }

    // Empty the state Array
    function emptyArray() public returns (uint) {
        while(newArr.length > 0) {
            newArr.pop(); // Remove all items into array
        }
        return newArr.length;
    }

    // Compute shift operation on array passed as the first param and from an index as the second param
    function remove(uint[] memory arr, uint index) public returns(uint[] memory) {
        uint arrLength = arr.length;
        require ((index >= 0 && index < arrLength), "Invalid index for the array");
        delete arr[index]; // Remove value from passed array from a specific index
        
        for(uint i = 0;i < arrLength; i++) {
           if(i >= index) {
               if((i == arrLength - 1)) { // Last item in the array
                    newArr.push(arr[arrLength - 1]);
                }else {
                    newArr.push(arr[i + 1]); // Items after reaching the expected index
                }
            } else { // Items before reaching the expected index
                newArr.push(arr[i]);
           }
        }

        newArr.pop(); // We remove the last item in the array to have the final collection.

        return newArr;
    }
}