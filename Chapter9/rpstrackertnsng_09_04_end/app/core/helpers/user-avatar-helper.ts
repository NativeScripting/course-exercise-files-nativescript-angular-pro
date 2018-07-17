export function getUserAvatarUrl(apiEndPoint: string, userId: number) {
    return `${apiEndPoint}/photo/${userId}`;
}
