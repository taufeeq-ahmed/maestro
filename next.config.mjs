/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'mlxnzrnbxsaxrvdwbfer.supabase.co',
            },
        ],
    },
};

export default nextConfig;
